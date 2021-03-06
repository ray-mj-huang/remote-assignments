class Header extends React.Component {

    state = {
        title : "Welcome Message"
    }

    clickTitle () {        
        this.setState({
            title:  "Hava a Good Time!"
        });
    }

    render () {
        return (
            <section id="webTitleBlock" className="header display-flex a-center j-center" onClick={this.clickTitle.bind(this)}>
                <h1 id="webTitle" className="fz-1 t-center">{ this.state.title }</h1>
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





class Content extends React.Component {

    state = {
      show: "display-none content-box-wrap fz-3 display-flex flex-wrap j-sp-bt"
    }

    clickShow () {        
        this.setState({
            show: "content-box-wrap fz-3 display-flex flex-wrap j-sp-bt"
        });
    }

    render () {
        return (
            <section className="content">
                
                <h2 className="t-center fz-2">Second Title</h2>
                
                <Box />
                
                <button id="callMoreBox" className="cta fz-3" onClick={this.clickShow.bind(this)}>Call to Action</button>

                <div id="moreBox" className= { this.state.show } >
                    <div className="content-box t-center">Content Box 5</div>
                    <div className="content-box t-center">Content Box 6</div>
                    <div className="content-box t-center">Content Box 7</div>
                    <div className="content-box t-center">Content Box 8</div>
                </div> 

            </section>
        )
    }
}



class MyApp extends React.Component {


    state = {
        menuClass: "mb-menu display-flex j-sp-bt"
    }

    openMenu () {
        this.setState({
            menuClass: "show mb-menu display-flex j-sp-bt"
        })
    }

    closeMenu () {
        this.setState({
            menuClass: "mb-menu display-flex j-sp-bt"
        })
    }


    render() {
        return (
            <div>

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

                        <div id="iconHam" className="icon-ham" onClick={this.openMenu.bind(this)}>
                            <img src="assets/ham.png" />
                        </div>
                    </div>
                </nav>

                <div id="mbMenu" className={ this.state.menuClass } >
                    <ul className="item-list fz-3 display-flex">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                    <div id="iconClose" className="mb-menu-close" onClick={this.closeMenu.bind(this)}>
                        <img src="assets/close.png"/>
                    </div>
                </div>

                <Header />

                <Content />

            </div>
        )
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

