// mdn date documentation


const niceDate = (timestampString) => {
    let date = new Date(parseInt(timestampString))
    return date.toDateString()
}

export default niceDate

// in book make use of item


{ niceDate(props.)}


niceDate { (props.publishedAt) }
