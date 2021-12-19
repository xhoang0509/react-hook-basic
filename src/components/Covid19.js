import { useState, useEffect } from "react";

const Covid19 = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const vietNam = {
        totalVietNam: 0,
        recoveredVietNam: 0,
        deathVietNam: 0,
    };
    const world = {
        totalWorld: 0,
        recoveredWorld: 0,
        deathWorld: 0,
    };
    useEffect(async () => {
        await fetch("https://static.pipezero.com/covid/data.json")
            .then((res) => res.json())
            .then(
                (res) => {
                    setData(res);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    if (isLoaded) {
        vietNam.totalVietNam = data.total.internal.cases;
        vietNam.recoveredVietNam = data.total.internal.recovered;
        vietNam.deathVietNam = data.total.internal.death;
        world.totalWorld = data.total.world.cases;
        world.recoveredWorld = data.total.world.recovered;
        world.deathWorld = data.total.world.death;
    }
    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number);
    };
    return (
        <>
            <div className="row">
                <h1 className="col-12 mb-3">Tổng quan</h1>
                <div className="card col-lg-3 col-md-12 col-sm-12 mr-2 ml-2 mt-3 bg-danger text-white">
                    <div className="card-body">
                        <h5 className="card-title">SỐ CA NHIỄM</h5>
                        <p className="card-text">
                            Việt Nam: {formatNumber(vietNam.totalVietNam)}
                        </p>
                        <p className="card-text">
                            Thế giới: {formatNumber(world.totalWorld)}
                        </p>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-12 col-sm-12 mr-2 ml-2 mt-3 bg-warning text-white">
                    <div className="card-body">
                        <h5 className="card-title">KHỎI</h5>
                        <p className="card-text">
                            Việt Nam: {formatNumber(vietNam.recoveredVietNam)}
                        </p>
                        <p className="card-text">
                            Thế giới: {formatNumber(world.recoveredWorld)}
                        </p>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-12 col-sm-12 mr-2 ml-2 mt-3 bg-secondary text-white">
                    <div className="card-body">
                        <h5 className="card-title">TỬ VONG</h5>
                        <p className="card-text">
                            Việt Nam: {formatNumber(vietNam.deathVietNam)}
                        </p>
                        <p className="card-text">
                            Thế giới: {formatNumber(world.deathWorld)}
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="mt-5">Thông kế số liệu covid 19 tại Việt Nam</h1>
            <table className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tỉnh</th>
                        <th scope="col">Số người chết</th>
                        <th scope="col">Tổng số ca</th>
                        <th scope="col">Số ca mắc trong ngày</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoaded ? (
                        data.locations.map((each, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{each.name}</td>
                                <td>{each.death}</td>
                                <td>{each.cases}</td>
                                <td>{each.casesToday}</td>
                            </tr>
                        ))
                    ) : (
                        <h3 className="mt-3">Đang lấy dữ liệu ...</h3>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Covid19;
