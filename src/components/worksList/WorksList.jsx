

const WorksList = ({ works }) =>{

    return(
        <>
            <ul>
                {
                    works.length > 0 ?
                        works.map((work, index) => {
                           return  <li key = {index}>{work}</li>
                        })
                        :
                        <h2>Нет работ в портфолио</h2>
                }
            </ul>
        </>
    )
}

export default WorksList;
