const Footer = ({credits}) => {
    const {year, author} = credits;
    return ( 
        <footer className="w-full bg-stone-800 fixed bottom-0">
            <div className="flex container justify-center gap-2">
               <h2>{year}</h2> 
               <h2>{author}</h2> 
            </div>
        </footer>
     );
}
 
export default Footer;