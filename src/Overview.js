export default function Overview({ name, time, dates, type }) {
  return (
    <>
      <div class="row">
        <div class="col">
          <img
            class="rounded-circle img-responsive  sessionI"
            alt="100x100"
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
            data-holder-rendered="true"
          />
        </div>
        <div class="col">
          <div>
            <p class="font-weight-bold text-left m-0">{name}</p>
            <p class="font-weight-light text-left">{type}</p>
          </div>
        </div>
        <div class="col">
          <div>
            <p class="font-weight-bold text-center m-0">{`${time}`}</p>
            <p class="font-weight-italic text-center">{dates}</p>
          </div>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </div>
        <div class="col">
          <a href="#">
            <span class="glyphicon glyphicon-arrow-right text-center"></span>
          </a>
        </div>
      </div>
      <div className="w-100" style={{ height: "3vh" }}></div>
    </>
  );
}
