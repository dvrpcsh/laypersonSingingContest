package filter;

import ch.qos.logback.core.util.StringUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import provider.JwtProvider;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {


    private final JwtProvider jwtProvider;

    //생성자를 통한 DI주입
    public JwtAuthenticationFilter(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {
            String token = parseBearerToken(request);

            //토큰이 빈 값에 대한 유효성 체크
            if(StringUtil.isNullOrEmpty(token)) {
                filterChain.doFilter(request, response);

                return;
            }

            String email = jwtProvider.validate(token);

            //이메일이 빈 값에 대한 유효성 체크(key가 안맞거나 유효기간이 초과된 경우)
            if(StringUtil.isNullOrEmpty(email)) {
                filterChain.doFilter(request, response);

                return;
            }

            //인증 정보에 대한 세부정보 설정
            AbstractAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(email, null, AuthorityUtils.NO_AUTHORITIES);


            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            securityContext.setAuthentication(authenticationToken);

            SecurityContextHolder.setContext(securityContext);
        } catch (Exception exception) {
            exception.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

    //request 헤더에서 가져온 인증키를 찾고 그것이 유효한 인증인지 검증하는 메서드
    private String parseBearerToken(HttpServletRequest request) {

        String authorization = request.getHeader("Authorization");

        //인증키 빈 값 체크
        boolean hasAuthorization = StringUtils.hasText(authorization);
        if(!hasAuthorization) { return null; }

        //인증키가 Bearer방식인지 확인
        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer) return null;

        String token = authorization.substring(7);
        return token;
    }
}
