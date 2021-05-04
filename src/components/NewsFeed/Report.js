import React from 'react'

const Report = () => {
    return (
        <div>
            <div className="modal fade report-post-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>report user</h2>
                  </div>
                </div>
                <form action>
                  <div className="report-content">
                    <ul className="report-post">
                      <li>
                        <input type="radio" id="f-option" name="selector" />
                        <label htmlFor="f-option">Intellectual Property</label>
                        <div className="check" />
                      </li>
                      <li>
                        <input type="radio" id="s-option" name="selector" />
                        <label htmlFor="s-option">Fraud &amp; Scam</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="t-option" name="selector" />
                        <label htmlFor="t-option">Mocking Victims</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="u-option" name="selector" />
                        <label htmlFor="u-option">Bullying</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="v-option" name="selector" />
                        <label htmlFor="v-option">Child Abuse</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="w-option" name="selector" />
                        <label htmlFor="w-option">Animal Abuse</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="x-option" name="selector" />
                        <label htmlFor="x-option">Sexual Activity</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="y-option" name="selector" />
                        <label htmlFor="y-option">Hate Speech</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                      <li>
                        <input type="radio" id="z-option" name="selector" />
                        <label htmlFor="z-option" onclick="reportIssue()">Others</label>
                        <div className="check">
                          <div className="inside" />
                        </div>
                      </li>
                    </ul>
                    <textarea name id cols rows placeholder="Enter Reason" defaultValue={""} />
                  </div>
                  <div className="text-right">
                    <button type="button" className="gd-btn" id="report-post-modal">submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Report
