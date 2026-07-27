import Part from "./Part"

const Content = ({ parts }) => {
  // console.log(parts);
  // console.log(parts.exercises);
  const total = parts.reduce((sum, part) => {
    console.log("sum", sum);
    console.log("part", part);
    return sum + part.exercises
  }, 0)
  //

  console.log(total);
  
  
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <p><b>Total of {total} exercises</b></p>
    </>
  )
}

export default Content