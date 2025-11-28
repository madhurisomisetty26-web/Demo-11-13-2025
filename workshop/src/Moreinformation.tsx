import React from 'react'
import Header from './Header'

export default function Moreinformation() {
  return (
    <div>
        <Header/>
        

<div className="container">
    <div className="row">
        <div className="col-md-3">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <span className="glyphicon glyphicon-arrow-right"></span>How is My Site? <a href="http://www.jquery2dotnet.com" target="_blank"><span
                            className="glyphicon glyphicon-new-window"></span></a>
                    </h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group"/>
                        <li className="list-group-item">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios"/>
                                    Good
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios"/>
                                    Excellent
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios"/>
                                    Bed
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios"/>
                                    Can Be Improved
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios"/>
                                    No Comment
                                </label>
                            </div>
                            </li>
                            <form>
                            <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
