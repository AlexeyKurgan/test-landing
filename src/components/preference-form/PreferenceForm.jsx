import React from 'react';
import Button from '../../shared/components/button/Button';
import LPSelect from '../../shared/components/select/LPSelect';
import './PreferenceForm.scss';

const PreferenceForm = () => {
    return (
        <form className="preference-form">
            <h1 className="title title--preference-form">Select your age preference for women</h1>
            <section className="age-preference">
                <div className="select-wrapper">
                    <LPSelect className="lp-select" name="age-form">
                        <option value="" disabled selected>From</option>
                        <option value="25">25</option>
                    </LPSelect>
                </div>
                <div className="select-wrapper">
                    <LPSelect className="lp-select" name="age-form">
                        <option value="" disabled selected>To</option>
                        <option value="35">35</option>
                    </LPSelect>
                </div>
            </section>

            <h2 className="subtitle subtitle--preference-form">What is your age?</h2>
            <section className="birth-date">
                <div className="select-wrapper">
                    <LPSelect className="lp-select" name="month">
                        <option value="" disabled selected>Month</option>
                        <option value="1">January</option>
                    </LPSelect>
                </div>
                <div className="select-wrapper">
                    <LPSelect className="lp-select" name="day">
                        <option value="" disabled selected>Day</option>
                        <option value="1">1</option>
                    </LPSelect>
                </div>
                <div className="select-wrapper">
                    <LPSelect className="lp-select" name="day">
                        <option value="" disabled selected>Year</option>
                        <option value="1995">1995</option>
                    </LPSelect>
                </div>
            </section>

            <p className="disclaimer">
                By proceeding, you confirm that you are fully legally capable of using this website and are at least 18 years old.
            </p>

            <Button className="btn-continue" type="submit">CONTINUE →</Button>
        </form>
    );
};

export default PreferenceForm;