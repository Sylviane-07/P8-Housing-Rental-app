function HostId({name, picture}) {
    const altText = `${name} profile pic`
    return (
      <div className="host-id">
        <h4 className="host-id__name">{name}</h4>
        <img className="host-id__img" src={picture} alt={altText}/>
      </div>
    );
}

export default HostId
