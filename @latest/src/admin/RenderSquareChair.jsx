import { wrap } from "framer-motion"






function RenderSquareChair({chair}){

const y = Math.floor((chair.grid_number/67)*2);
const x = chair.grid_number%67*2;



return(
    <div>
    <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,
            left: `${x}em`,
            height: '2em',
            width: "2em",
            border: "solid 1px",
            borderRadius: "100%",
            float: "left",
            flexWrap: wrap,
            backgroundColor: "blue",
            center: Text,
            
            
        }}
        // onClick={removeTable}
        className='pointer'
        >
            <p>{chair.chair_number}</p>
            {/* <p>{next}</p> */}
        </div>
    </div>
)
}


export default RenderSquareChair