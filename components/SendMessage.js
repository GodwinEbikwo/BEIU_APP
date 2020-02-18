import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import Modalize from "react-native-modalize";

class SendMessage extends React.Component {
  modal = React.createRef();

  renderContent = () => {
    return (
      <View style={s.content}>
        <Text style={s.content__subheading}>{"Last step"}</Text>
        <Text style={s.content__heading}>Send the message?</Text>
        <Text style={s.content__description}>
          In this example, consider how important the word “to” is in the search
          query. The searcher specifies they are looking to travel from Brazil
          to the United States. Before BERT, the searcher would have received a
          news article about the opposite: Americans traveling to Brazil. Not
          exactly helpful. But now, Google understands the importance of “to” in
          this search and serves up a deliciously relevant result.
        </Text>
        <TextInput style={s.content__input} placeholder="Type your username" />

        <TouchableOpacity
          style={s.content__button}
          activeOpacity={0.9}
          onPress={this.closeModal}
        >
          <Text style={s.content__buttonText}>{"Send"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  onClosed = () => {
    const { onClosed } = this.props;

    if (onClosed) {
      onClosed();
    }
  };

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  render() {
    return (
      <Modalize ref={this.modal} onClosed={this.onClosed} adjustToContentHeight>
        {this.renderContent()}
      </Modalize>
    );
  }
}

export default SendMessage;

const s = StyleSheet.create({
  content: {
    padding: 20
  },

  content__icon: {
    width: 32,
    height: 32,

    marginBottom: 20
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: "600",
    color: "#ccc"
  },

  content__heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333"
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: "200",
    lineHeight: 22,
    color: "#666"
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 20,

    width: "100%",

    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#cdcdcd",
    borderRadius: 6
  },

  content__button: {
    paddingVertical: 15,

    width: "100%",

    backgroundColor: "#333",
    borderRadius: 6
  },

  content__buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  }
});
