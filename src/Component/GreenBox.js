
export default function GreenBox(props) {  

  return (
    
    <>
   <div class="p-3 mb-2 bg-success text-white">
   Number: <input value={props.Greencount} />
   <button onClick={props.onClick}>{props.Play}</button>
        <button>{props.skip}</button>
   </div>
    </>
  )
}
