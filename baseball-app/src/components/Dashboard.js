import React from 'react'

export default function Dashboard(props) {

return (
<div className="container">
<button data-testid="baller" className="button" onClick={props.ball}>Ball</button>
   <button data-testid="striker" className="button" onClick={props.strike}>Strike</button>
   <button data-testid="hitter" className="button" onClick={props.hit}>Hit</button>
   <button data-testid="fouler" className="button" onClick={props.foul}>Foul</button>
   <button data-testid="inns" className="button" onClick={props.inning}>Inning </button>
   <button data-testid="outs" className="button" onClick={props.out}>Out </button>
</div>
)
}