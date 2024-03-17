const UserTabs = ({ dataList, changingUi }) => {

    return <div className="user-tabs">
        {dataList.map((name) => {
            return <h4 onClick={() => changingUi(name)} >{name.company}</h4>
        })}
    </div>
}

export default UserTabs;