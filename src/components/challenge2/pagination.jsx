import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({allUsers, userInPage, changePage}) => {

    const usersNum = [];
    for(let i=1; i<=Math.ceil(allUsers/userInPage) ; i++){
        usersNum.push(i);
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
            {usersNum.map((num,i) => {
                return(
                    <li key={i} className="page-item"><a onClick={() => changePage(num)} className="page-link" href="#">{num}</a></li>
                    )
            })}
            </ul>
        </nav>
    )


}
export default Pagination;