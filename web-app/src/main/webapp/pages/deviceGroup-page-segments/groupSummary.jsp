
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-header" data-background-color="orange">
                        <i class="material-icons">brightness_low</i>
                    </div>
                    <div class="card-content">
                        <p class="category" id="cardtitle1">Average Temperature</p>
                        <h3 class="title" id="card1">Yet to be updated
                        </h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-header" data-background-color="green">
                        <i class="material-icons">invert_colors</i>
                    </div>
                    <div class="card-content">
                        <p class="category" id="cardtitle2">Average Humidity</p>
                        <h3 class="title" id="card2">Yet to be updated</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-header" data-background-color="red">
                        <i class="material-icons">zoom_out_map</i>
                    </div>
                    <div class="card-content">
                        <p class="category" id="cardtitle3">Average Power Consumption</p>
                        <h3 class="title" id="card3">Yet to be updated</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-header" data-background-color="purple">
                        <i class="material-icons">devices</i>
                    </div>
                    <div class="card-content">
                        <p class="category" id="cardtitle4">Number Of Devices</p>
                        <h3 class="title" id="card4">Yet to be updated</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6">
<div id="mapId" style="width: 100%; height:700px"></div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="row">
                <div class="card">
                    <div class="card-header" data-background-color="blue">
                        <h4 class="title">Active Devices</h4>
                    </div>
                    <div class="card-content table-responsive">
                        <table class="table table-hover" id="active-devices">
                            <thead class="text-warning">
                            <th>Device Name</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Power Consumption</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td colspan="6">Loading...</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="card">
                    <div class="card-header" data-background-color="red">
                        <h4 class="title">Inactive Devices</h4>
                    </div>
                    <div class="card-content table-responsive">
                        <table class="table table-hover" id="inactive-devices">
                            <thead class="text-warning">
                            <th>Device Name</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Power Consumption</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td colspan="6">Loading...</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

