import React from 'react';
import Form from '../common/Form';

class ProjectForm extends Form {
  state = {
    data: {
      project_id: '',
      project_name:'',
      customer_name: '',
      unicom_name: '',
      business_id: '',
      contract_id: '',
      erp_id: '',
      income_tax: 0,
      income: 0,
      income_it_tax: 0,
      income_it: 0,
      income_dwy_tax: 0,
      income_dwy: 0
    },
    errors: {}
  }
  render() { 
    return (
      <React.Fragment>
        <h2 className="text-center">ICT/ITO 项目自主实施工单</h2>
        <form>
          <div className="row">
            <div className="col-8 mx-auto">
              {
                this.renderInput('project_id', '项目编号', 'text')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderInput('project_name', '项目名称', 'text')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderInput('customer_name', '客户名称', 'text')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderInput('unicom_name', '联通签约主体', 'text')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderInput('business_id', '商机编号')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderInput('contract_id', '合同编号')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderInput('erp_id', 'ERP编号')
              }
            </div>
            <div className="col-8 mx-auto">
              {
                this.renderButton('下一步', 'primary')
              }
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
 
export default ProjectForm;