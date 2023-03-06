function HostId({name, picture}) {
    const altText = `${name} profile pic`
    return (
      <div>
        <h4>{name}</h4>
        <img src={picture} alt={altText}/>
      </div>
    );
}

export default HostId
