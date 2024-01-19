import head from '../img/head.png';
import right_hand from '../img/right_hand.png';
import left_leg from '../img/left_leg.png';
import right_leg from '../img/right_leg.png';

import classes from '../styles/Model.module.css';
import Box from '@mui/material/Box';
import SliderBar from './SliderBar';

import { useState } from 'react';

function Model() {
    const [userMeasurements, setUserMeasurements] = useState({
        ptp: 26,
        torse: 28,
        waist: 31
    });
    function handleMeasurementChange(value, type) {
        let prevState = userMeasurements
        if (type === 'ptp') {
            setUserMeasurements({...prevState, ptp: value})
        }
        else if (type === "torso") {
            setUserMeasurements({ ...prevState, torso: value });
        } else if (type === "waist") {
            setUserMeasurements({ ...prevState, waist: value });
        } else {
            return;
        }
    }
    return (
        <>
            <div className={classes.slider}>
                <h3>Enter your measurements: </h3>
                <br />
                <Box sx={{ width: 300 }}>
                    <SliderBar
                        className={classes.slider_bar}
                        sliderText="Pit to Pit Length(cm)"
                        defaultValue={26}
                        start={20}
                        end={32}
                        handleMeasurementChange={handleMeasurementChange}
                        changeType="ptp"
                    />
                    <SliderBar
                        className={classes.slider_bar}
                        sliderText="Torso Length(cm))"
                        defaultValue={28}
                        start={24}
                        end={32}
                        handleMeasurementChange={handleMeasurementChange}
                        changeType="torso"
                    />
                    <SliderBar
                        className={classes.slider_bar}
                        sliderText="Waist size(cm)"
                        defaultValue={31}
                        start={28}
                        end={34}
                        handleMeasurementChange={handleMeasurementChange}
                        changeType="waist"
                    />
                </Box>
            </div>
            <div className={classes.big_container}>
                <div className={classes.model_container}>
                    <div className={classes.head}>
                        <img
                            src={head}
                            alt="head"
                            className={classes.head_img}
                        />
                    </div>
                    <div className={classes.left_arm}>
                        <img
                            src={right_hand}
                            alt="left_hand"
                            className={classes.left_arm_img}
                        />
                    </div>
                    <div className={classes.right_arm}>
                        <img
                            src={right_hand}
                            alt="right_hand"
                            className={classes.right_arm_img}
                        />
                    </div>
                    <div className={classes.left_leg}>
                        <img
                            src={left_leg}
                            alt="left_leg"
                            className={classes.left_leg_img}
                        />
                    </div>
                    <div className={classes.right_leg}>
                        <img
                            src={right_leg}
                            alt="right_leg"
                            className={classes.right_leg_img}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Model;
