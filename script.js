//script.js
document.addEventListener("DOMContentLoaded", function () {
  const insectList = document.getElementById("insect-list-ul");
  const modal = document.getElementById("insect-modal");
  const modalContent = document.querySelector(".modal-content");
  const closeModal = document.getElementById("close-modal");
  const searchInput = document.getElementById("search-input");
  const addInsectBtn = document.getElementById("add-insect-btn");
  const addInsectFormContainer = document.getElementById("add-insect-form-container");
  const cancelFormBtn = document.getElementById("cancel-form-btn");
  const addInsectForm = document.getElementById("add-insect-form");
  const logoutButton = document.getElementById("logout-btn");
  const logoutModal = document.getElementById("logout-modal");
  const confirmLogoutButton = document.getElementById("confirm-logout");
  const cancelLogoutButton = document.getElementById("cancel-logout");

  let insects = JSON.parse(localStorage.getItem("insects")) || [
    { 
        name: "Ant", 
        image: "images/ant.png",     
        scientificName: "Formicidae", 
        habitat: "Underground nests, forests, and fields", 
        diet: "Seeds, fungi, and small insects", 
        lifespan: "1-3 years", 
        description: "Ants are highly social insects that form structured colonies and exhibit complex cooperative behaviors." 
      },
      { 
        name: "Bee", 
        image: "images/bee.png", 
        scientificName: "Apidae", 
        habitat: "Gardens, meadows, and forests", 
        diet: "Nectar and pollen", 
        lifespan: "1-5 years", 
        description: "Bees are essential pollinators that play a crucial role in ecosystems, known for their ability to produce honey and wax." 
      },
      { 
        name: "Butterfly", 
        image: "images/butterfly.png", 
        scientificName: "Lepidoptera", 
        habitat: "Gardens, meadows, and forests", 
        diet: "Nectar from flowers", 
        lifespan: "1-2 weeks", 
        description: "Butterflies are delicate insects characterized by their large, vividly colored wings and graceful flight patterns." 
      },
      { 
        name: "Caterpillar", 
        image: "images/Caterpillar.png", 
        scientificName: "Lepidoptera Larvae", 
        habitat: "Plants and trees", 
        diet: "Leaves and flowers", 
        lifespan: "Several weeks before metamorphosis", 
        description: "Caterpillars represent the larval stage of butterflies and moths, undergoing metamorphosis to transform into their adult forms." 
      },
      { 
        name: "Cockroach", 
        image: "images/Cockroach.png", 
        scientificName: "Blattodea", 
        habitat: "Dark and warm environments", 
        diet: "Organic matter and food scraps", 
        lifespan: "1-2 years", 
        description: "Cockroaches are highly resilient insects capable of thriving in various environmental conditions." 
      },
      { 
        name: "Cricket", 
        image: "images/Cricket.png", 
        scientificName: "Gryllidae", 
        habitat: "Grasslands and gardens", 
        diet: "Leaves, fungi, and small insects", 
        lifespan: "Approximately 3 months", 
        description: "Crickets are nocturnal insects renowned for their characteristic chirping sounds produced by stridulation." 
      },
      { 
        name: "Dragonfly", 
        image: "images/dragonfly.png", 
        scientificName: "Anisoptera", 
        habitat: "Lakes, ponds, and wetlands", 
        diet: "Mosquitoes, flies, and other small insects", 
        lifespan: "Approximately 6 months", 
        description: "Dragonflies are predatory insects with large, multifaceted eyes and exceptionally agile flight capabilities." 
      },
      { 
        name: "Earwig", 
        image: "images/Earwig.png", 
        scientificName: "Dermaptera", 
        habitat: "Under logs, soil, and plants", 
        diet: "Insects, plants, and decaying matter", 
        lifespan: "Approximately 1 year", 
        description: "Earwigs are nocturnal insects known for their distinctive pincers, which they use for defense and prey capture." 
      },
      { 
        name: "Firefly", 
        image: "images/Firefly.png", 
        scientificName: "Lampyridae", 
        habitat: "Forests, fields, and areas near water", 
        diet: "Small insects and nectar", 
        lifespan: "1-2 years", 
        description: "Fireflies are bioluminescent insects that emit light through chemical reactions to attract mates and communicate." 
      },
      { 
        name: "Flea", 
        image: "images/flea.png", 
        scientificName: "Siphonaptera", 
        habitat: "Animals, carpets, and bedding", 
        diet: "Blood from mammals", 
        lifespan: "2-3 months", 
        description: "Fleas are small, parasitic insects that feed on the blood of mammals and birds, often serving as disease vectors." 
      },
      { 
        name: "Grasshopper", 
        image: "images/Grasshopper.png", 
        scientificName: "Caelifera", 
        habitat: "Grasslands and meadows", 
        diet: "Leaves, grasses, and crops", 
        lifespan: "Approximately 1 year", 
        description: "Grasshoppers are herbivorous insects known for their powerful hind legs, which enable them to leap great distances." 
      },
      { 
        name: "Housefly", 
        image: "images/Housefly.png", 
        scientificName: "Musca domestica", 
        habitat: "Urban areas, homes, and farms", 
        diet: "Decaying organic matter and food waste", 
        lifespan: "2-4 weeks", 
        description: "Houseflies are common insects found near human settlements, often acting as disease vectors due to their feeding habits." 
      },
      { 
        name: "Ladybug", 
        image: "images/ladybug.png", 
        scientificName: "Coccinellidae", 
        habitat: "Gardens, forests, and meadows", 
        diet: "Aphids and other small insects", 
        lifespan: "Approximately 1 year", 
        description: "Ladybugs, also known as lady beetles, are small, round insects recognized for their bright red or orange shells adorned with black spots." 
      },
      { 
        name: "Lacewing", 
        image: "images/Lacewing.png", 
        scientificName: "Chrysopidae", 
        habitat: "Gardens, forests, and meadows", 
        diet: "Aphids and small insects", 
        lifespan: "4-6 weeks", 
        description: "Lacewings are beneficial insects recognized for their delicate, lace-like wings and their role in controlling pest populations." 
      },
      { 
        name: "Moth", 
        image: "images/Moth.png", 
        scientificName: "Lepidoptera", 
        habitat: "Forests, fields, and gardens", 
        diet: "Nectar and fruit juices", 
        lifespan: "1-4 weeks", 
        description: "Moths are nocturnal insects closely related to butterflies, typically displaying muted colors and intricate wing patterns." 
      },
      { 
        name: "Mayfly", 
        image: "images/Mayfly.png", 
        scientificName: "Ephemeroptera", 
        habitat: "Freshwater lakes, rivers, and streams", 
        diet: "Algae and organic debris", 
        lifespan: "Few hours to a few days", 
        description: "Mayflies are delicate insects with short lifespans, often seen in swarms near bodies of water." 
      },
      { 
        name: "Praying Mantis", 
        image: "images/Praying Mantis.png", 
        scientificName: "Mantodea", 
        habitat: "Gardens, forests, and grasslands", 
        diet: "Small insects and spiders", 
        lifespan: "6 months - 1 year", 
        description: "Praying mantises are distinguished by their elongated bodies, folded forearms, and exceptional hunting abilities." 
      },
      { 
        name: "Stag Beetle", 
        image: "images/Stag Beetle.png", 
        scientificName: "Lucanidae", 
        habitat: "Forests and woodlands", 
        diet: "Tree sap and decaying wood", 
        lifespan: "1-3 years", 
        description: "Stag beetles are large beetles recognized for their prominent mandibles, which resemble the antlers of a stag." 
      },
      { 
        name: "Scarab Beetle", 
        image: "images/Scarab Beetle.png", 
        scientificName: "Scarabaeidae", 
        habitat: "Forests and deserts", 
        diet: "Dung and decomposing plant matter", 
        lifespan: "Approximately 1 year", 
        description: "Scarab beetles are revered in ancient cultures and play a significant role in nutrient recycling in ecosystems." 
      },
      { 
        name: "Silverfish", 
        image: "images/Silverfish.png", 
        scientificName: "Lepisma saccharina", 
        habitat: "Dark, damp places such as basements", 
        diet: "Paper, glue, and starch-based materials", 
        lifespan: "2-8 years", 
        description: "Silverfish are wingless insects known for their silvery appearance and rapid, darting movements." 
      },
      { 
        name: "Tick", 
        image: "images/Tick.png", 
        scientificName: "Ixodida", 
        habitat: "Forests and grasslands", 
        diet: "Blood from animals", 
        lifespan: "1-2 years", 
        description: "Ticks are arachnids that attach to hosts to consume blood, potentially transmitting diseases in the process." 
      },
      { 
        name: "Termite", 
        image: "images/Termite.png", 
        scientificName: "Isoptera", 
        habitat: "Wooden structures and underground", 
        diet: "Wood and plant fibers", 
        lifespan: "1-50 years", 
        description: "Termites are social insects that consume wood and contribute to the decomposition of organic matter." 
      },
      { 
        name: "Tarantula Hawk Wasp", 
        image: "images/Tarantula Hawk Wasp.png", 
        scientificName: "Pepsis", 
        habitat: "Deserts, grasslands, and forests", 
        diet: "Nectar; larvae feed on tarantulas", 
        lifespan: "Several months", 
        description: "Tarantula hawk wasps are large, powerful wasps known for their paralyzing sting, which they use to hunt tarantulas." 
      },
      
      { 
        name: "Weevil", 
        image: "images/weevil.png", 
        scientificName: "Curculionidae", 
        habitat: "Stored grains and plants", 
        diet: "Seeds, grains, and crops", 
        lifespan: "1-8 months", 
        description: "Weevils are small beetles recognized for their elongated snouts and their impact on agricultural crops." 
      },
];

  function displayInsectList(filteredInsects) {
    insectList.innerHTML = "";
    filteredInsects.forEach((insect, index) => {
      const li = document.createElement("li");

      const img = document.createElement("img");
      img.src = insect.image;
      img.alt = insect.name;
      img.style.width = "80px";
      img.style.height = "80px";

      const name = document.createElement("p");
      name.textContent = insect.name;

      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️ Edit";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        openEditForm(insect, index);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️ Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteInsect(index);
      });

      li.appendChild(img);
      li.appendChild(name);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      li.addEventListener("click", () => openModal(insect));

      insectList.appendChild(li);
    });
  }

  function openModal(insect) {
    document.getElementById("modal-name").textContent = insect.name;
    document.getElementById("modal-description").textContent = insect.description;
    document.getElementById("modal-scientific-name").textContent = insect.scientificName;
    document.getElementById("modal-habitat").textContent = insect.habitat;
    document.getElementById("modal-diet").textContent = insect.diet;
    document.getElementById("modal-lifespan").textContent = insect.lifespan;

    document.getElementById("modal-image").src = insect.image;
    document.getElementById("modal-image").alt = insect.name;

    modal.classList.add("show");
    modalContent.classList.add("show");
  }

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    modalContent.classList.remove("show");
  });

  function deleteInsect(index) {
    if (confirm("Are you sure you want to delete this insect?")) {
      insects.splice(index, 1);
      localStorage.setItem("insects", JSON.stringify(insects));
      displayInsectList(insects);
    }
  }

  function openEditForm(insect, index) {
    addInsectFormContainer.style.display = "block";

    document.getElementById("insect-name").value = insect.name;
    document.getElementById("insect-scientific-name").value = insect.scientificName;
    document.getElementById("insect-description").value = insect.description;
    document.getElementById("insect-habitat").value = insect.habitat;
    document.getElementById("insect-diet").value = insect.diet;
    document.getElementById("insect-lifespan").value = insect.lifespan;

    addInsectForm.onsubmit = function (event) {
      event.preventDefault();

      const updatedInsect = {
        name: document.getElementById("insect-name").value,
        scientificName: document.getElementById("insect-scientific-name").value,
        description: document.getElementById("insect-description").value,
        habitat: document.getElementById("insect-habitat").value,
        diet: document.getElementById("insect-diet").value,
        lifespan: document.getElementById("insect-lifespan").value,
        image: insect.image,
      };

      const imageInput = document.getElementById("insect-image").files[0];
      if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (event) {
          updatedInsect.image = event.target.result;
          insects[index] = updatedInsect;
          localStorage.setItem("insects", JSON.stringify(insects));
          displayInsectList(insects);
          addInsectFormContainer.style.display = "none";
          addInsectForm.reset();
        };
        reader.readAsDataURL(imageInput);
      } else {
        insects[index] = updatedInsect;
        localStorage.setItem("insects", JSON.stringify(insects));
        displayInsectList(insects);
        addInsectFormContainer.style.display = "none";
        addInsectForm.reset();
      }
    };
  }

  function searchInsects() {
    let input = searchInput.value.toLowerCase();
    let insects = document.querySelectorAll("#insect-list-ul li");
    let found = false;

    insects.forEach(insect => {
      let name = insect.textContent.toLowerCase();
      if (name.includes(input)) {
        insect.style.display = "block";
        found = true;
      } else {
        insect.style.display = "none";
      }
    });

    let errorMessage = document.getElementById("search-error");
    errorMessage.style.display = found ? "none" : "block";
  }

  searchInput.addEventListener("input", searchInsects);

  displayInsectList(insects);
  
  function updateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById("timezone").textContent = `🗓️${dateString} | 🕒${timeString}`;
  }
  
  setInterval(updateTime, 1000);
  
  updateTime();
  addInsectBtn.addEventListener("click", () => {
    addInsectFormContainer.style.display = "block";
    addInsectForm.reset();
    addInsectForm.onsubmit = addNewInsect;
  });

  cancelFormBtn.addEventListener("click", () => {
    addInsectFormContainer.style.display = "none";
  });

  function addNewInsect(event) {
    event.preventDefault();

    const name = document.getElementById("insect-name").value;
    const scientificName = document.getElementById("insect-scientific-name").value;
    const description = document.getElementById("insect-description").value;
    const habitat = document.getElementById("insect-habitat").value;
    const diet = document.getElementById("insect-diet").value;
    const lifespan = document.getElementById("insect-lifespan").value;
    const imageInput = document.getElementById("insect-image").files[0];

    if (!name || !description || !imageInput) {
      alert("All fields are required!");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      insects.push({
        name, scientificName, description, habitat, diet, lifespan, image: event.target.result
      });

      insects.sort((a, b) => a.name.localeCompare(b.name));

      localStorage.setItem("insects", JSON.stringify(insects));
      displayInsectList(insects);
      addInsectFormContainer.style.display = "none";
      addInsectForm.reset();
    };

    reader.readAsDataURL(imageInput);
  }
  logoutButton.addEventListener("click", function (event) {
    event.preventDefault();
    logoutModal.style.display = "flex";
  });
  
  cancelLogoutButton.addEventListener("click", function () {
    logoutModal.style.display = "none";
  });
  
  confirmLogoutButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  
});



