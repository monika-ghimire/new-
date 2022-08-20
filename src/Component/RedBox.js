
export default function RedBox(props) {
  return (
    <>
   <div class="p-3 mb-2 bg-danger text-white">
   Number: <input value={props.Redcount} />
   <button onClick={props.onClick}>{props.Play}</button>
        <button>{props.skip}</button>
   </div>
    </>
  )
}

