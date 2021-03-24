import React from 'react';

const BusinessAdd = () => {
  const departments = ['大客户中心', '集成中心/产研院', '和平分公司', '河东分公司', '河西分公司', '南开分公司', '红桥分公司', '河北分公司', '东丽分公司', '津南分公司', '西青分公司', '北辰分公司', '塘沽分公司', '汉沽分公司', '大港分公司', '静海分公司', '武清分公司', '宁河分公司', '宝坻分公司', '蓟州分公司']
  return (
    <React.Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <form action="">
            <div className="form-group">
              <label>商机编号</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="">商机名称</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="">营销单位</label>
              <select className="form-control">
                <option value=""></option>
                {
                  departments.map(department=><option value={department}>{department}</option>)
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">客户经理</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="">联系方式</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="">需求描述</label>
              <textarea cols="30" rows="5" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">创建商机</button>
          </form>
        </div>
      </div>
      
    </React.Fragment>
  );
}
 
export default BusinessAdd;