import { ReactElement } from "react"

type HeadingProps = {
    title: string,
}

// Return type of an component JSX.Element
const Heading = ({title} : HeadingProps) : ReactElement => {
    return <h1>{title}</h1>
}

export default Heading