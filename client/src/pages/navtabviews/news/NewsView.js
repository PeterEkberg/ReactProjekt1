import { getPython } from "../../../shared/api/service/PythonAPIService"


export const NewsView = () => {
    getPython()
    return (
        <div>
            NEWS
       </div>
    )
}
