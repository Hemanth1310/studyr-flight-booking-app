import q1_comfort from './q1-comfort.png'
import q1_economic from './q1-ecomonic.png'
import q2_fast from './q2-fast.png'
import q2_slow from './q2-slow.png'
import q3_heavy from './q3-heavy.png'
import q3_light from './q3-light.png'
import q4_plan_change from './q4-plan-change.png'
import q4_plan_no_change from './q4-plan-no-change.png'
import q5_discount from './q5-discount.png'
import q5_priority_checkin from './q5-priority-checkin.png'
import q5_special_upgarde from './q5-special-upgrade.png'


const all_questions = [
    {
        option1:"I am seeking for an Economic option",
        img1:q1_economic,
        option2:"I need my comforts",
        img2:q1_comfort
    },
    {
        option1:"I am in no rush ",
        img1:q2_slow,
        option2:"I intend to reach my destination faster ",
        img2:q2_fast,
    },
    {
        option1:"I am a Light traveller ",
        img1:q3_light,
        option2:"I need extra baggage",
        img2:q3_heavy
    },
    {
        option1:"My plans Do not change",
        img1:q4_plan_no_change,
        option2:"My plans might change",
        img2:q4_plan_change
    }
    
]

export default all_questions