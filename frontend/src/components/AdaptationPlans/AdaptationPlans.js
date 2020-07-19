import React from 'react';
import { connect } from 'react-redux';
import {TakeInfo} from '../../redux/reducers/SuperReducer';
import {TakeHRPlan} from '../../redux/reducers/HrReducer';
import AdaptationPlansForm from './AdaptationPlansForm';
import { mapRoleIdToRole } from '../../utils/mapRoleIdToRole';
import { Roles } from '../../constants/roles';

class AdaptationPlans extends React.Component {


    componentDidMount(){
        if (this.props.role === Roles.HR){
            this.props.TakeHRPlan()
        }
        else {
            this.props.TakeInfo(this.props.user_id)
        }
        
    }
     
    render() {
        const privilege = (role) => {
            return role === Roles.HR ? true : false;
        }
       let  DataAboutPlans = [];
      if (this.props.role === Roles.Director){
          DataAboutPlans = this.props.planForSuper;
      }
      else {DataAboutPlans = this.props.allPlans};
        return (
            <AdaptationPlansForm
                DataAboutPlans = {DataAboutPlans}
                name = {this.props.name}
                onPlanClick = {()=>console.log("Подробнее")}
                canCreate = {privilege(this.props.role)}
            />
        );

    }
}

const mapStateToProps=(state)=>({
    user_id: state.AuthReducer.user_id,
    planForSuper: state.SuperReducer.planForSuper,
    allPlans: state.HrReducer.planForHr,
    name: state.AuthReducer.name,
    role: mapRoleIdToRole(state.AuthReducer['role_id'])
});

export default connect(mapStateToProps,{TakeInfo,TakeHRPlan})(AdaptationPlans);