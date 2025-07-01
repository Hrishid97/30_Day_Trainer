export default function Layout(props){

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">30DayTrainer</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://www.hrishikeshapotkar.com" target="_blank"> Hrishikesh</a><br/>Styled with<a href="https://www.fantacss.smoljames.com" traget="_blank"> FantaCSS</a></p>
        </footer>
    )

    //https://www.YOUR_USERNAME.netlify.app

    return(
        <>
            {header}
            {children}
            {footer}
        </>
    )
}