

const Course = ({ course }) => {
    const { thumbnail, name, instructor } = course;
    return (
        <div>
            <img className="rounded-md" src={thumbnail} alt="thumbnail" />
            <div className="my-2 flex items-center justify-between">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-blue-800">{instructor}</p>
            </div>
        </div>
    )
}

export default Course