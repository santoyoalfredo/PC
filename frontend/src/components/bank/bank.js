function Bank() {

    return (
        <div class="col-md-4">
            <table class="table table-light table-bordered align-middle">
                <tbody>
                    <tr>
                        <td>Quarters</td>
                        <td>0</td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-success">+</button>
                            </div>
                        </td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-danger">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Dimes</td>
                        <td>0</td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-success">+</button>
                            </div>
                        </td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-danger">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Nickels</td>
                        <td>0</td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-success">+</button>
                            </div>
                        </td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-danger">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Pennies</td>
                        <td>0</td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-success">+</button>
                            </div>
                        </td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-danger">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$0.00</td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </td>
                        <td>
                            <div class="d-grid">
                                <button type="button" class="btn btn-secondary">Reset</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bank;
