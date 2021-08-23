const Todaysdate = () => {
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    return (
        <div className="justify-center">
            <p className="text-center mt-5 font-extrabold text-gray-500"> 
            Today is {`${date}-${month<10?`0${month}`:`${month}`}-${year}`}</p>
        </div>
    );
};

export default Todaysdate;
