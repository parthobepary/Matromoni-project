import axios from "axios";

const AgentService = {};

// single agent

AgentService.show = async (id) => {
  let url = `agent/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

// agent hiring

AgentService.hire = async (id) => {
  let url = `hire/agent/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

// agent category

AgentService.category = async () => {
  let url = `agent/category`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

// agent-suggested

AgentService.AgentSuggested = async () => {
  let url = `agent-suggested`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

// top agent
AgentService.TopAgent = async () => {
  let url = `agent-top`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

// agent-rated
AgentService.RatedAgent = async () => {
  let url = `agent-rated`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

//Agent service list
AgentService.AgentServiceList = async () => {
  let url = `agentService`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};

AgentService.AddService = async (data) => {
  let url = `agentService`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};

AgentService.updateService = async (data, id) => {
  let url = `agent-contract-update/${id}`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};

AgentService.updateAgentService = async (data, id) => {
  let url = "/agentService/" + id + "?_method=PUT";
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};

AgentService.delete = async (id) => {
  const urlDelete = "/agentService/" + id + "?_method=DELETE";
  const res = await axios.delete(urlDelete);
  const response = await res;
  return response;
};
AgentService.contactList = async () => {
  let url = `agent-contract-list`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};

AgentService.contactUpdate = async (data, id) => {
  const urlDelete = "/agent-contract-update/" + id;
  const res = await axios.post(urlDelete, data);
  const response = await res;
  return response;
};

AgentService.agent = async () => {
  const urlDelete = "agent";
  const res = await axios.get(urlDelete);
  const response = await res;
  return response;
};

AgentService.myAgent = async () => {
  const urlDelete = "my-agent-contract/list";
  const res = await axios.get(urlDelete);
  const response = await res;
  return response;
};
AgentService.myAgentContactUpdate = async (data, id) => {
  const urlDelete = "/my-agent-contract-update/" + id;
  const res = await axios.post(urlDelete, data);
  const response = await res;
  return response;
};

export default AgentService;
