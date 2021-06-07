const serverFetch = async () => {
    const tempNames = [];
    var i;
  
    const response = await fetch("/api/members");
    const body = await response.json();
  
    for (i in body) {
      tempNames.push(body[i].name);
    }
    return tempNames;
  };
  
  export default serverFetch;