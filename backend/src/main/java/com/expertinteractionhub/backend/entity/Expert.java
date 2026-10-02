package com.expertinteractionhub.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name  = "experts")
public class Expert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String profession;
    private String linkedin;
    private String instagram;
    private String upiId;
    private Double meetingFee;
    private String profileImage;
    private String certificate;
    private Integer experience;

    public Expert()
    {

    }

    public Expert(Long id, String name, String email, String profession,
                  String linkedin, String instagram, String upiId,
                  Double meetingFee, String profileImage,
                  String certificate, Integer experience) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.profession = profession;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.upiId = upiId;
        this.meetingFee = meetingFee;
        this.profileImage = profileImage;
        this.certificate = certificate;
        this.experience = experience;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getUpiId() {
        return upiId;
    }

    public void setUpiId(String upiId) {
        this.upiId = upiId;
    }

    public Double getMeetingFee() {
        return meetingFee;
    }

    public void setMeetingFee(Double meetingFee) {
        this.meetingFee = meetingFee;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getCertificate() {
        return certificate;
    }

    public void setCertificate(String certificate) {
        this.certificate = certificate;
    }

    public Integer getExperience() {
        return experience;
    }

    public void setExperience(Integer experience) {
        this.experience = experience;
    }
}
