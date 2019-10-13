import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ModalPopup from "../ModalMessages/ModalPopup";
import AddMembersView from "../Channels/AddMembersView";
import { addContacts, inviteByEmail } from "../../Services/ContactsService";
import Notify from "../ModalMessages/ToastNotif";
import EmailInvitation from "./EmailInvitation";
import AddNewContactForm from "./AddNewContactForm";
import { search } from "../../Services/ContactsService";
import SelectedContact from "./SelectedContact";
import ServiceClientUtils from "../../Services/Clients/ServiceClientUtils";
import store from "../../State/configureStore";
import { hideSpinner } from "../../State/actions/spinner";

class AddContactMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createConv: false,
            spinner: false
        };
    }

    componentDidMount() {
        console.log("AddContactMenu", this.props);

        let domain = { ...this.props.selectedDomain };
        this.setState({ selectedDomain: domain });
    }

    showAddContact = () => this.setState({ addContact: true });
    closeAddContact = () => this.setState({ addContact: false });

    sendTheRequest(contact, index) {
        let data = [];
        data.push(contact);
        let newContact = [...this.state.contacts];
        newContact[index].sending = true;
        newContact[index].spinner = true;
        this.setState({ contacts: [...newContact] });
        this.addContacts(data, index);
    }

    addContacts = (users, ind) => {
        // console.log("data onto send contacts to add ", users);

        addContacts(users, "search")
            .then(response => {
                setTimeout(() => {
                    this.props.fetchContacts({
                        selectedDomain: this.props.selectedDomain.userDomain
                    });
                }, 3000);
                this.setState({ spinner: false });
                let newContact = [...this.state.contacts];
                newContact[ind].sentRequest = true;
                newContact[ind].spinner = false;
                this.setState({ contacts: newContact });
                // Notify({ type: "success", message: "Contact has been added" });
                // this.closeAddContact();
                // this.props.cancel();
            })
            .catch(error => {
                console.log("error ", error);
                this.setState({ spinner: false });
                <Notify type={"error"} message={"Error while adding the contacts. Please try again later."} />
                // Notify({
                //   type: "error",
                //   message: "Error while adding the contacts. Please try again later."
                // });
            });
    };

    inviteByEmail = emails => {
        inviteByEmail(emails)
            .then(response => {
                // setTimeout(this.props.fetchContacts, 3000);
                <Notify type={"success"} message={"Invite sent successfully."} />
                // Notify({ type: "success", message: "Invite sent successfully." });
                this.closeSendInvite();
                this.props.cancel();
            })
            .catch(error => {
                console.log("error ", error);
                <Notify type={"error"} message={"Error while sending the invite. Please try again later."} />
                // Notify({
                //   type: "error",
                //   message: "Error while sending the invite. Please try again later."
                // });
            });
    };

    addNewContact = data => {
        let saveArray = [];

        let saveContactObj = {
            userName: data.name,
            emailAddresses: {},
            phoneNumbers: {}
        };

        if (!data.name || data.name === "") {
            return;
        }
        if (data.emailType.length > 0) {
            data.emailType.forEach((elem, index) => {
                if (elem.value) {
                    if (index === 0) {
                        saveContactObj.emailAddresses["home"] = elem.value;
                    } else {
                        saveContactObj.emailAddresses["work"] = elem.value;
                    }
                }
            });
        }
        if (data.phoneType.length > 0) {
            data.phoneType.forEach((elem, index) => {
                if (elem.value) {
                    if (index === 0) {
                        saveContactObj.phoneNumbers["satellite"] = elem.value;
                    } else if (index === 1) {
                        saveContactObj.phoneNumbers["mobile"] = elem.value;
                    } else {
                        saveContactObj.phoneNumbers["land"] = elem.value;
                    }
                }
            });
        }

        saveArray.push(saveContactObj);
        console.log("saving contact", saveArray);

        addContacts(saveArray, "form")
            .then(response => {
                // console.log("we will see adding new contact the response", response);
                setTimeout(() => {
                    this.props.fetchContacts({
                        selectedDomain: this.props.selectedDomain.userDomain
                    });
                }, 3000);
                <Notify
                    type={"success"}
                    message={"Contact has been added"}
                />;
                // Notify({ type: "success", message: "Contact has been added" });
                this.closeAddNewContact();
                this.props.cancel();
            })
            .catch(error => {
                console.log("error ", error);
                // Notify({
                //   type: "error",
                //   message: "Error while adding the contact. Please try again later."
                // });
                <Notify
                    type={"error"}
                    message={"Error while adding the contact. Please try again later."}
                />;
            });
    };

    onSearch = e => {
        this.setState({ search: e.target.value });
    };
    showSendInvite = () => {
        this.setState({ emailInvitation: true });
    };
    closeSendInvite = () => this.setState({ emailInvitation: false });

    showAddNewContact = () => this.setState({ addNewContact: true });
    closeAddNewContact = () => this.setState({ addNewContact: false });

    searchContacts = e => {
        e.preventDefault();
        search(this.state.search, this.props.selectedDomain.userDomain).then(
            contacts => {
                let newContacts = [...contacts];
                newContacts.forEach(element => {
                    element.sentRequest = false;
                    element.spinner = false;
                });
                this.setState({ contacts: newContacts, showSearchResults: true });
            }
        );
    };

    render() {
        // console.log("the props ", this.props);

        let { contacts } = this.state;

        return (
            <React.Fragment>
                <div className="p-2">
                    {/* <div className="d-flex justify-content-center p-4">
            <a
              onClick={this.showAddContact}
              style={{ width: "300px", height: "30px" }}
              className="btn btn-sm btn-open"
            >
              Search FrontM user
            </a>
          </div>
          <div className="partition-or">
            <hr />
            <span className="or-container">
              <span>or</span>
            </span>
          </div> */}
                    <div className="p-4">
                        <div className="d-flex w-75 mx-auto align-items-center p-2">
                            <a onClick={this.showAddNewContact}>
                                <img
                                    className="icon-contact-menu"
                                    src="/img/create new contact-icon@2x.png"
                                    alt="createNewIcon"
                                />

                                <span>Create new contact</span>
                            </a>
                        </div>
                        <div className="d-flex w-75 mx-auto align-items-center p-2">
                            <a onClick={this.showSendInvite}>
                                <img
                                    className="icon-contact-menu"
                                    src="/img/send-invitation-icon@2x.png"
                                    alt="sendEmailIcon"
                                />
                                <span>Send an email invitation to a friend</span>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="p-2">
                        <form onSubmit={this.searchContacts}>
                            <input
                                placeholder="Search FrontM user and press enter"
                                type="text"
                                className="form-control form-control-lg"
                                onChange={this.onSearch}
                            />
                        </form>

                        <Scrollbars
                            autohide="true"
                            style={
                                this.state.showSearchResults
                                    ? { height: "300px" }
                                    : { height: "10px" }
                            }
                        >
                            <div className="flex p-1">
                                <div className="pt-2">
                                    {contacts &&
                                        contacts.length > 0 && (
                                            <div>
                                                {contacts.map((contact, index) => (
                                                    <div className="my-3" key={index}>
                                                        <SelectedContact
                                                            index={index}
                                                            contact={contact}
                                                            requestSent={contact.sentRequest}
                                                            spinner={contact.spinner}
                                                            sending={contact.sending}
                                                            sendTheRequest={this.sendTheRequest.bind(this)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    {this.state.showSearchResults &&
                                        (!contacts || contacts.length === 0) && (
                                            <div className="text-center mt-4">
                                                No Contacts found for the given search criteria.
                      </div>
                                        )}
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                </div>
                {/* {this.state.addContact && (
          <ModalPopup
            onClose={this.closeAddContact}
            size="sm"
            title="Add Contact"
          >
            <AddMembersView
              fromPage="AddContacts"
              allContacts={this.state.contacts}
              selectedDomain={this.state.selectedDomain.userDomain}
              addMembers={this.addContacts}
              cancel={this.closeAddContact}
            />
          </ModalPopup>
        )} */}

                {this.state.emailInvitation && (
                    <ModalPopup
                        onClose={this.closeSendInvite}
                        size="sm"
                        title="Send an email invitation"
                    >
                        <EmailInvitation
                            inviteMembers={this.inviteByEmail}
                            cancel={this.closeSendInvite}
                        />
                    </ModalPopup>
                )}

                {this.state.addNewContact && (
                    <ModalPopup
                        onClose={this.closeAddNewContact}
                        size="sm"
                        title="Add new contact"
                    >
                        <AddNewContactForm
                            cancel={this.closeAddNewContact}
                            addNewContact={this.addNewContact}
                            edit={false}
                        />
                    </ModalPopup>
                )}
            </React.Fragment>
        );
    }
}

export default AddContactMenu;
