import { useParams } from "react-router-dom"

function Categories () {

    const params =useParams()

    return(
        <div>
            Categories sind niemand / 

            Slug:{params.slug}
        </div>
    )


}

export default Categories