export default function OnePoint({icon, content}) {
  return (
    <>
      <div className="one-point d-flex align-items-center pb-4">
      <img src={icon} width="40px" />

        <div className="pe-2 pt-content fw-bold">{content}</div>
      </div>
    </>
  );
}
