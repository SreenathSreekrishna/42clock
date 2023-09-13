import './Clock.css';

const Clock = (props) => {
    return <div className="clock">
        <div className='indents'>
        {
            [...Array(42).keys()].map((i) => {
                return <div 
                        className="long-indent"
                        text-content={i ? i : 42}
                        style={{'--rotation': `${i/42*360}deg`}}
                        key={i}>
                        </div>;
            })
        }
        </div>
        <div className='second-hand'
             style={{'--angle': `${Math.floor(props.numMs / 1000) / 42 * 360 - 90}deg`}}
        >
        </div>
        <div className='minute-hand'
             style={{'--angle': `${Math.floor(props.numMs / 1000) / 1764 * 360 - 90}deg`}}
        >
        </div>
        <div className='hour-hand'
             style={{'--angle': `${Math.floor(props.numMs / 1000) / 74088 * 360 - 90}deg`}}
        >
        </div>
    </div>;
}

export default Clock;