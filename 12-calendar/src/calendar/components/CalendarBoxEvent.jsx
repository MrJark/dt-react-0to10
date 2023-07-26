


export const CalendarBoxEvent = ({ event }) => {
    // console.log(props);

    const { title, user } = event;

    return (
        <>
            <p>{title}</p>
            <span>{user.name}</span>
        </>
    )
}
