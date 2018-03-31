<%--Popup modal for adding new device--%>
<div class="modal fade" id="filter" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times
                    </button>
                </div>
                <form id="filter-devices-form" method="post">
                    <div class="form-group" style="padding-left: 10%; padding-right: 10%;">
                       <p>By Country</p>  <input type="text" name="countryName" id="countryName" value=""
                               placeholder="Country Name"
                               class="form-control"/>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-info btn-simple"
                        onclick="incountry()">Add
                </button>
            </div>
        </div>
    </div>
</div>