function HostId({name, picture}) {
    const altText = `${name} profile pic`
    return (
      <div>
        <p>{name}</p>
        <img src={picture} alt={altText}/>
      </div>
    );
}

export default HostId
