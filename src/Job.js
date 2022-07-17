export default function Overview({ name, organize, location, dates }) {
  return (
    <>
      <div class="row">
        <div class="col d-flex" style={{ justifyContent: "center" }}>
          <img
            class="rounded-circle img-responsive  session2"
            alt="100x100"
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
            data-holder-rendered="true"
          />
        </div>
        <div class="col">
          <div>
            <p class="font-weight-bold text-left m-0">{name}</p>
            <p class="font-weight-light text-left">{organize}</p>
          </div>
        </div>
        <div class="col">
          <div>
            <p class="font-weight-bold text-center m-0">{dates}</p>
            <p class="font-weight-light text-center">{location}</p>
          </div>
        </div>
        <div class="col">
          <a href="#">
            <span class="glyphicon glyphicon-arrow-right text-center"></span>
          </a>
        </div>
      </div>
    </>
  );
}
