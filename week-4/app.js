




class Navbar extends React.Component {

    render () {
        return (
            <nav>
                <div className="nav-wrap display-flex j-sp-bt a-center">
                    
                    <div className="display-flex">
                        <div className="site-title display-flex a-center fz-3">Website Title</div>
                        <div className="logo display-flex a-center">
                            <img src="assets/earth.png" />
                        </div>
                    </div>

                    <ul className="item-list fz-3 display-flex">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>

                    <div id="iconHam" className="icon-ham">
                        <img src="assets/ham.png" />
                    </div>
                </div>
            </nav>
        )
    }
}


class MbMenu extends React.Component {

    render () {
        return (
            <div id="mbMenu" className="mb-menu display-flex j-sp-bt">
                <ul className="item-list fz-3 display-flex">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
                <div id="iconClose" className="mb-menu-close">
                    <img src="assets/close.png"/>
                </div>
            </div>
        )
    }
}




class Header extends React.Component {

    render () {
        return (
            <section id="webTitleBlock" className="header display-flex a-center j-center">
                <h1 id="webTitle" className="fz-1 t-center">Welcome Message</h1>
            </section>
        )
    }
}



class Box extends React.Component {

    render () {
        return (
            <div className="content-box-wrap fz-3 display-flex flex-wrap j-sp-bt">
                <div className="content-box t-center">Content Box 1</div>
                <div className="content-box t-center">Content Box 2</div>
                <div className="content-box t-center">Content Box 3</div>
                <div className="content-box t-center">Content Box 4</div>
            </div>
        )
    }
}


class MoreBox extends React.Component {

    render () {
        return (
            <div id="moreBox" className="display-none content-box-wrap fz-3 display-flex flex-wrap j-sp-bt">
                <div className="content-box t-center">Content Box 5</div>
                <div className="content-box t-center">Content Box 6</div>
                <div className="content-box t-center">Content Box 7</div>
                <div className="content-box t-center">Content Box 8</div>
            </div>          
        )
    }
}



class Content extends React.Component {

    render () {
        return (
            <section className="content">
                
                <h2 className="t-center fz-2">Second Title</h2>
                
                <Box />
                
                <button id="callMoreBox" className="cta fz-3">Call to Action</button>

                <MoreBox />

            </section>
        )
    }
}



class MyApp extends React.Component {

    state = {
        title : "Welcome Message"
    }


    render() {
        return (
            <div>
                <Navbar />

                <MbMenu />

                <Header />

                <Content />
            </div>
        )
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);





