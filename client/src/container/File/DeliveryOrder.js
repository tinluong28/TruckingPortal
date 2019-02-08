import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FileInfo from "../../components/file/FileInfo";
import ContainerList from "../../components/file/ContainerList";
import ContainerDetails from "../../components/file/ContainerDetail/ContainerDetails";
import { connect } from "react-redux";
import {
  getCurrentFile,
  addFile,
  updateCurrentFile,
  deleteFile,
  addContainer,
  updateContainer,
  getCurrentContainer,
  deleteContainer,
  clearCurrentFile
} from "../../actions/deliveryOrderActions";
import Spinner from "../../components/common/Spinner/Spinner";
import isEmpty from "../../validation/is-empty";
import Moment from "react-moment";
import Modal from "../../components/common/Modal";

class DeliveryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {
        mode: "",
        fileCode: "",
        fileNo: "",
        status: "",
        customer: "",
        eta: "",
        entryDate: "",
        carrier: "",
        master: "",
        house: "",
        terminal: "",
        tentativelfd: "",
        devan: "",
        containers: [],
        _id: ""
      },
      containerInput: {
        number: "",
        size: "20",
        freight: "HOLD",
        customs: "HOLD",
        pcsAmount: "",
        pcsUnit: "PCS",
        weightAmount: "",
        weightUnit: "KG",
        dimensionAmount: "",
        dimensionUnit: "CBM",
        terminal: "",
        eta: "",
        dischargeDate: "",
        lfd: "",
        puDate: "",
        demurrageDays: "",
        puTime: "",
        perDiemDate: "",
        emptyReturn: "",
        perDiemDays: "",
        chasisNo: "",
        chasisPerDiemDate: "",
        chasisReturnDate: "",
        chasisPerDiemDays: "",
        chasisFlip: false,
        newChasisNo: "",
        yardStorage: false,
        storageDays: "",
        TMF: false,
        TMFFee: "",
        nightGate: false,
        prePull: false,
        advanceExamFee: false,
        examFee: "",
        advanceDemurrage: false,
        demurrageFee: "",
        advancePerDiem: false,
        perDiemFee: "",
        advanceDocsFee: false,
        docsFee: "",
        timeIn: "",
        timeOut: "",
        waitTime: "",
        dryRun: "",
        remark: "",
        delivery: [],
        _id: ""
      },
      deliveryInput: {
        location: {
          name: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          contact: "",
          name: "",
          phone: "",
          email: ""
        },
        delivered: false,
        deliveryDate: "",
        deliveryTime: "",
        deliverPcsAmount: "",
        deliverPcsUnit: "PCS",
        deliverWeightAmount: "",
        deliverWeightUnit: "KG",
        deliverDimensionAmount: "",
        deliverDimensionUnit: "CBM"
      },
      edit: false,
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getCurrentFile(this.props.match.params.id);
    } else {
      this.setState({ edit: true });
    }
  }

  componentWillUnmount() {
    this.props.clearCurrentFile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.deliveryOrder.file) {
      const { file } = nextProps.deliveryOrder;
      file.mode = !isEmpty(file.mode) ? file.mode : "FCL";
      file.fileCode = !isEmpty(file.fileCode) ? file.fileCode : "DTF";
      file.fileNo = !isEmpty(file.fileNo) ? file.fileNo : "";
      file.status = !isEmpty(file.status) ? file.status : "STANDARD";
      file.customer = !isEmpty(file.customer) ? file.customer : "";
      file.eta = !isEmpty(file.eta) ? file.eta : "";
      file.entryDate = !isEmpty(file.entryDate)
        ? file.entryDate
        : new Date.now();
      file.carrier = !isEmpty(file.carrier) ? file.carrier : "";
      file.master = !isEmpty(file.master) ? file.master : "";
      file.house = !isEmpty(file.house) ? file.house : "";
      file.terminal = !isEmpty(file.terminal) ? file.terminal : "";
      file.tentativelfd = !isEmpty(file.tentativelfd) ? file.tentativelfd : "";
      file.devan = !isEmpty(file.devan) ? file.devan : "NO";
      this.setState({
        file: {
          mode: file.mode,
          fileCode: file.fileCode,
          fileNo: file.fileNo,
          status: file.status,
          customer: file.customer,
          eta: file.eta,
          entryDate: file.entryDate,
          carrier: file.carrier,
          master: file.master,
          house: file.house,
          terminal: file.terminal,
          tentativelfd: file.tentativelfd,
          devan: file.devan,
          _id: file._id
        }
      });
    }
  }

  addContainer = e => {
    e.preventDefault();
    const { deliveryOrder } = this.state;
    const { containerInput } = this.state;
    this.props.addContainer(deliveryOrder._id, containerInput);
    this.setState({
      containerInput: {
        number: ""
      }
    });
  };

  updateContainer = e => {
    e.preventDefault();
    const { deliveryOrder } = this.state;
    const { _id, ...containerInput } = this.state.containerInput;
    this.props.updateContainer(deliveryOrder._id, _id, containerInput);
  };

  onViewContainer = containerNumber => {
    this.props.getCurrentContainer(containerNumber);
    this.setState({ containerInput: this.props.deliveryOrder.container });
  };

  handleFileChange = (name, value) => {
    this.setState({
      file: { ...this.state.file, [name]: value }
    });
  };
  handleFileSelectChange = (name, value) => {
    this.setState({
      file: { ...this.state.file, [name]: value }
    });
  };
  handleModeChange = (name, value) => {
    if (value === "LCL") {
      this.setState({
        file: { ...this.state.file, [name]: value, fileCode: "DTL" }
      });
    } else {
      this.setState({
        file: { ...this.state.file, [name]: value, fileCode: "DTF" }
      });
    }
  };
  handleETAChange = (name, value) => {
    const b = Date.parse(value);
    const a = new Date(b + 345600000).toISOString().slice(0, 10);
    this.setState({
      file: {
        ...this.state.file,
        [name]: value,
        tentativelfd: a
      }
    });
  };
  handleCustomerChange = (name, value) => {
    this.setState({
      file: {
        ...this.state.file,
        customer: { ...this.state.file.customer, [name]: value }
      }
    });
  };
  handleContainerChange = (name, value) => {
    this.setState({
      containerInput: { ...this.state.containerInput, [name]: value }
    });
  };
  handleContainerSelectChange = (name, value) => {
    this.setState({
      containerInput: { ...this.state.containerInput, [name]: value }
    });
  };
  render() {
    const containerInput = this.state.containerInput;
    return (
      <div className="col-xl-12">
        <div className="row bg-warning">
          <h1 className="pl-3">File</h1>
        </div>
        <div className="row bg-secondary">
          <div className="m-2">
            <button
              onClick={this.toggleEdit}
              className="btn btn-outline-dark"
              style={{
                display: this.state.file._id ? "inline-block" : "none"
              }}
            >
              Cancel
            </button>
            <button
              // onClick={props.setDone}
              className="btn btn-primary ml-3"
            >
              Save
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <FileInfo
            fileNo={this.state.file.fileNo}
            fileCode={this.state.file.fileCode}
            status={this.state.file.status}
            mode={this.state.file.mode}
            customer={this.state.file.customer.name}
            eta={this.state.file.eta}
            entryDate={this.state.file.entryDate}
            carrier={this.state.file.carrier}
            master={this.state.file.master}
            house={this.state.file.house}
            terminal={this.state.file.terminal}
            tentativelfd={this.state.file.tentativelfd}
            devan={this.state.file.devan}
            changeETA={this.handleETAChange}
            changeData={this.handleFileChange}
            changeSelectData={this.handleFileSelectChange}
            changeMode={this.handleModeChange}
            changeCustomerData={this.handleCustomerChange}
          />
          {/* <ContainerList
            containerList={this.state.file.containerList}
            containerInput={this.state.containerInput}
            changeData={this.handleContainerChange}
          /> */}
        </div>

        <ContainerDetails
          number={this.state.containerInput.number}
          size={this.state.containerInput.size}
          freight={this.state.containerInput.freight}
          customs={this.state.containerInput.customs}
          pcsAmount={this.state.containerInput.pcsAmount}
          pcsUnit={this.state.containerInput.pcsUnit}
          weightAmount={this.state.containerInput.weightAmount}
          weightUnit={this.state.containerInput.weightUnit}
          dimensionAmount={this.state.containerInput.dimensionAmount}
          dimensionUnit={this.state.containerInput.dimensionUnit}
          terminal={this.state.containerInput.terminal}
          eta={this.state.containerInput.eta}
          dischargeDate={this.state.containerInput.dischargeDate}
          lfd={this.state.containerInput.lfd}
          puDate={this.state.containerInput.puDate}
          demurrageDays={this.state.containerInput.demurrageDays}
          puTime={this.state.containerInput.puTime}
          perDiemDate={this.state.containerInput.perDiemDate}
          emptyReturn={this.state.containerInput.emptyReturn}
          perDiemDays={this.state.containerInput.perDiemDays}
          chasisNo={this.state.containerInput.chasisNo}
          chasisPerDiemDate={this.state.containerInput.chasisPerDiemDate}
          chasisReturnDate={this.state.containerInput.chasisReturnDate}
          chasisPerDiemDays={this.state.containerInput.chasisPerDiemDays}
          chasisFlip={this.state.containerInput.chasisFlip}
          newChasisNo={this.state.containerInput.newChasisNo}
          nightGate={this.state.containerInput.nightGate}
          prePull={this.state.containerInput.prePull}
          yardStorage={this.state.containerInput.yardStorage}
          storageDays={this.state.containerInput.storageDays}
          TMF={this.state.containerInput.TMF}
          TMFFee={this.state.containerInput.TMFFee}
          nightGate={this.state.containerInput.nightGate}
          prePull={this.state.containerInput.prePull}
          advanceExamFee={this.state.containerInput.advanceExamFee}
          examFee={this.state.containerInput.examFee}
          advanceDemurrage={this.state.containerInput.advanceDemurrage}
          demurrageFee={this.state.containerInput.demurrageFee}
          advancePerDiem={this.state.containerInput.advancePerDiem}
          perDiemFee={this.state.containerInput.perDiemFee}
          advanceDocsFee={this.state.containerInput.advanceDocsFee}
          docsFee={this.state.containerInput.docsFee}
          remark={this.state.containerInput.remark}
          changeData={this.handleContainerChange}
          changeSelectData={this.handleContainerSelectChange}
          containerInput={containerInput}
        />
      </div>
    );
  }
}

DeliveryOrder.propTypes = {
  getCurrentFile: PropTypes.func.isRequired,
  addFile: PropTypes.func.isRequired,
  updateCurrentFile: PropTypes.func.isRequired,
  deleteFile: PropTypes.func.isRequired,
  addContainer: PropTypes.func.isRequired,
  updateContainer: PropTypes.func.isRequired,
  getCurrentContainer: PropTypes.func.isRequired,
  deleteContainer: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  deliveryOrder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deliveryOrder: state.deliveryOrder,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    getCurrentFile,
    addFile,
    updateCurrentFile,
    deleteFile,
    addContainer,
    updateContainer,
    getCurrentContainer,
    deleteContainer,
    clearCurrentFile
  }
)(DeliveryOrder);
