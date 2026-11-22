

function Layout(id, file)
{
  fetch(file + "?cache=" + Date.now())
// Check if the response is correct
  .then(res => 
  {
    if (!res.ok) 
      {
        throw new Error("Failed to load: " + file);
      }
    return res.text();
  })
// this gets the html and puts it into the the div innerHTMl (It checks if the div id is correct)
  .then(html => 
  {
    const e = document.getElementById(id)
    if (!e) 
    {
      console.error("Element not found: ", id);
      return;
    }
    console.log("FETCHED HTML:", html);

    e.innerHTML = html;
  })

  .catch(err => console.error(err));
  console.log("Fetching:", new URL("layout/Layout1.html", window.location.href).href);
    
  console.log("ID:", id);
  console.log("Element:", document.getElementById(id));
}

function openGifViewer() {
    document.getElementById("gifViewer").classList.add("active");
}

function closeGifViewer() {
    document.getElementById("gifViewer").classList.remove("active");
}
