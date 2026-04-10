import Time "mo:core/Time";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  // Legacy types kept for migration compatibility
  type Message = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Project = {
    id : Nat;
    title : Text;
    description : Text;
    techStack : [Text];
    liveUrl : Text;
    repoUrl : Text;
  };

  type BlogPost = {
    id : Nat;
    title : Text;
    excerpt : Text;
    content : Text;
    date : Time.Time;
    tags : [Text];
    published : Bool;
  };

  // Legacy stable variables preserved for upgrade compatibility
  var nextMessageId = 0;
  var nextProjectId = 0;
  var nextBlogPostId = 0;
  let messages = Map.empty<Nat, Message>();
  let projects = Map.empty<Nat, Project>();
  let blogPosts = Map.empty<Nat, BlogPost>();

  /// Appointment booking type
  type Appointment = {
    id : Nat;
    name : Text;
    dateOfBirth : Text;
    timeOfBirth : Text;
    placeOfBirth : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Appointment {
    public func compareByTime(a : Appointment, b : Appointment) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  var nextAppointmentId = 0;
  let appointments = Map.empty<Nat, Appointment>();

  /// Submit a new appointment booking
  public shared func bookAppointment(
    name : Text,
    dateOfBirth : Text,
    timeOfBirth : Text,
    placeOfBirth : Text,
    message : Text,
  ) : async Nat {
    let id = nextAppointmentId;
    let appt : Appointment = {
      id;
      name;
      dateOfBirth;
      timeOfBirth;
      placeOfBirth;
      message;
      timestamp = Time.now();
    };
    appointments.add(id, appt);
    nextAppointmentId += 1;
    id;
  };

  /// Retrieve all appointment bookings
  public query func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort(Appointment.compareByTime);
  };
};
