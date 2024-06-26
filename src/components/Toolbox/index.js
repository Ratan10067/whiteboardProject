import React, { useContext } from 'react'
import classes from "./index.module.css"
import { COLORS, FILL_TOOL_TYPES, SIZE_TOOL_TYPES, STROKE_TOOL_TYPES } from '../../constants'
import cx from "classnames"
import toolboxcontext from '../../store/Toolbox-context'
import boardContext from '../../store/board-context'
const Toolbox = () => {
    const { activeToolItem } = useContext(boardContext);
    const { toolboxState, changeStroke, changeFill, changeSize } = useContext(toolboxcontext);
    const strokeColor = toolboxState[activeToolItem]?.stroke;
    const fillColor = toolboxState[activeToolItem]?.fill;
    const size = toolboxState[activeToolItem]?.size;
    return (
        <div className={classes.container}>
            {STROKE_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}>
                <div className={classes.toolBoxLabel}>
                    stroke
                </div>
                <div className={classes.colorsContainer}>
                    {Object.keys(COLORS).map((k) => {
                        return <div className={cx(classes.colorBox, { [classes.activeColorBox]: strokeColor === COLORS[k] })} style={{ background: COLORS[k] }} onClick={() => changeStroke(activeToolItem, COLORS[k])}>

                        </div>
                    })}
                </div>
            </div>}
            {FILL_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}>
                <div className={classes.toolBoxLabel}>
                    Fill Color
                </div>
                <div className={classes.colorsContainer}>
                    {Object.keys(COLORS).map((k) => {
                        return <div className={cx(classes.colorBox, { [classes.activeColorBox]: fillColor === COLORS[k] })} style={{ background: COLORS[k] }} onClick={() => changeFill(activeToolItem, COLORS[k])}>

                        </div>
                    })}
                </div>
            </div>}
            {SIZE_TOOL_TYPES.includes(activeToolItem) && <div className={classes.selectOptionContainer}>
                <div className={classes.toolBoxLabel}>
                    Brush Size
                </div>
                <input
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={size}
                    onChange={(event) => changeSize(activeToolItem,event.target.value)}
                ></input>
            </div>}
        </div>
    )
}

export default Toolbox
