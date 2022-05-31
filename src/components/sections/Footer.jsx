const Footer = ({credits}) => {
    const {year, author} = credits;
    return ( 
        <footer className="w-full bg-stone-800 fixed bottom-0 z-50">
            <div className="flex container justify-center gap-2 p-2 items-center m-auto">
               <h2>{year}</h2> | 
               <h2>{author}</h2> 
            </div>
        </footer>
     );
}
 
export default Footer;