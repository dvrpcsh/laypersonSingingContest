import './SellListCss.css'

function SellList({
    img,
    name,
    count,
    price,
    tage,
    eaPrice
}) {
    return (
        <div>
            <div>
                {img.map((item, i) => (
                    <div key={i} className="div">
                        <img alt="" src={item} />
                    </div>
                ))}
            </div>
            <div>
                {name.map((item, i) => (
                    <div key={i} className="div">
                        <p> {item} </p>
                    </div>
                ))}
            </div>
            <div>
                {price.map((item, i) => (
                    <div key={i} className="price">
                        <h3> {item.toLocaleString()}원</h3>
                    </div>
                ))}
            </div>
            <div>
                {eaPrice.map((eaPrice, i) => (
                        <div key={i} className="div">
                            <p>(1개당 {eaPrice}원)</p>
                        </div>
                 ))}
            </div>
            <div className="tage">
                {tage}
            </div>
            <div className="tage">
                {tage}
            </div>
            <div className="tage">
                {tage}
            </div>
        </div>

    )
}

export default SellList;