import "./Home1.css"

function Home1(){
    // js code
    // alert("Home")

    return (
        // html
        <body>
        <div className="container">
            <div className="navbar">
                <div className="logo"></div>
                <div className="search-box"></div>
                <div className="button-container">
                    <div className="btn1"></div>
                    <div className="btn2"></div>
                </div>
            </div>
            <div className="contents">
                <div className="content-column">
                    <div className="list-title"></div>
                    <div className="list-box"></div>
                </div>
                <div className="content-box">
                    <div className="box1">
                        <div className="image">
                            <div className="pic-frame"></div>
                            <div className="box1"></div>
                            <div className="box2"></div>
                        </div>
                        <div className="info-box"></div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Home1;

