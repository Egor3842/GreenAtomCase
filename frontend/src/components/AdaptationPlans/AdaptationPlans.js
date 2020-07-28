import React from 'react';
import { connect } from 'react-redux';
import { takePlans, setFilter, createPlan, getPlansAmount, getFilteredList, setPlansAmount, setSort } from '../../redux/reducers/PlansReducer';
import { takeNames, takeSteps, takePositions} from '../../redux/reducers/DictReducer';
import AdaptationPlansForm from './AdaptationPlansForm';
import { SetInfoForPlan } from '../../redux/reducers/EmployeeReducer'
import { mapRoleIdToRole } from '../../utils/mapRoleIdToRole';
import { Roles } from '../../constants/roles';

class AdaptationPlans extends React.Component {

    
    componentDidMount(){
        this.props.getFilteredList(this.props.accountInfo.role,this.props.filters, this.props.accountInfo.user_id);
        this.props.takeSteps();
        if (this.props.accountInfo.role===Roles.HR) {
            this.props.getPlansAmount('');
            this.props.takeNames(2);
            this.props.takeNames(3);
            this.props.takePositions();
        } else{
            this.props.getPlansAmount(this.props.accountInfo.user_id);
        }
    }

    onSort = (page,sort) => {
         this.props.setSort(sort);
         console.log('sortiruyu i filtruyu', sort);
         this.props.getFilteredList(this.props.accountInfo.role,this.props.filters, this.props.accountInfo.user_id, page,sort)
    }

    arePlansExist = (list) => {
       return (list && list.length > 0);
    }

    onPageChange = (page) => {
       this.filterPlans(page, this.props.sort);
    }

    filterPlans = (page) => {
        this.props.getFilteredList(this.props.accountInfo.role,this.props.filters, this.props.accountInfo.user_id, page,this.props.sort)
    }


    onFilter = (filter,value) => {
        const newFilters = { ...this.props.filters, [filter]: value };
        this.props.setFilter(newFilters);
        console.log(this.props.sort);
        this.props.getFilteredList(this.props.accountInfo.role, newFilters, this.props.accountInfo.user_id,1,this.props.sort);
    }

    privilegeToAdd = (role) => {
        return role === Roles.HR;
    }
     
    render() {
        return (
            <AdaptationPlansForm
                canCreate={this.privilegeToAdd(this.props.accountInfo.role)}
                onFilter={this.onFilter}
                filterPlans={this.filterPlans}
                onPageChange={this.onPageChange}
                arePlansExist={this.arePlansExist}
                onSort={this.onSort}
                setPlansAmount={this.props.setPlansAmount}
                createPlan={this.props.createPlan}
                isFetching={this.props.isFetching}
                SetInfoForPlan={this.props.SetInfoForPlan}
                DataAboutPlans={this.props.filteredList}
                amount={this.props.amount}
                sort={this.props.sort}
                filters={this.props.filters}
                dict={this.props.dict}
                accountInfo={this.props.accountInfo}
            />
    
        );

    }
}

const mapStateToProps = (state) =>({
    isFetching: state.AuthReducer.isFetching,
    allPlans: state.PlansReducer.plansList,
    filters: state.PlansReducer.filters,
    filteredList: state.PlansReducer.filteredList,
    amount: state.PlansReducer.amount,
    sort: state.PlansReducer.sort,
    accountInfo: {
        user_id: state.AuthReducer.user_id,
        name: state.AuthReducer.name,
        role: mapRoleIdToRole(state.AuthReducer['role_id']),
    },
    dict: {
        steps: state.DictReducer.stepList,
        workersNames: state.DictReducer.workersNames,
        supersNames: state.DictReducer.supersNames,
        positions: state.DictReducer.positions
    }
});

export default connect(mapStateToProps,
            { takePlans, takeSteps, takeNames, SetInfoForPlan, setFilter, takePositions, createPlan, getPlansAmount, setSort, getFilteredList, setPlansAmount }
            )(AdaptationPlans);