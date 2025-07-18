"use client"

import { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RotateCw, ZoomIn, MousePointerClick } from "lucide-react"

const models = [
  {
    id: "apartment",
    name: "Luxury Apartment",
    type: "building",
    color: "#5d35ff",
    description: "Modern luxury apartments with premium amenities and stunning views of the city.",
    position: [0, 0, 0],
    scale: 1.5,
  },
  {
    id: "villa",
    name: "Premium Villa",
    type: "house",
    color: "#ff35a0",
    description: "Spacious villas with private gardens, swimming pools, and elegant interiors.",
    position: [0, 0, 0],
    scale: 1.5,
  },
  {
    id: "office",
    name: "Commercial Space",
    type: "office",
    color: "#35c5ff",
    description: "State-of-the-art office spaces designed for productivity and modern business needs.",
    position: [0, 0, 0],
    scale: 1.5,
  },
]

// Simplified Building component
function Building({ modelType, modelColor, position, scale }) {
  const ref = useRef(null)

  // Simple box for all model types to avoid complexity
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={modelColor} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

export default function ModelShowcase() {
  const [activeModel, setActiveModel] = useState(models[0])

  return (
    <div className="py-20 bg-gradient-to-b from-black to-purple-950" id="3d-showcase">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive 3D Showcase</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our properties in stunning 3D. Rotate, zoom, and interact with each model to get a better
            understanding of our offerings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-black/50 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
              <div className="h-[500px]">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                  <Building
                    modelType={activeModel.type}
                    modelColor={activeModel.color}
                    position={activeModel.position}
                    scale={activeModel.scale}
                  />

                  <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={1.5} far={1.5} />
                  <Environment preset="city" />
                  <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} />
                </Canvas>
              </div>

              <div className="p-4 bg-black/30 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div className="text-white font-medium">{activeModel.name}</div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-white/70 text-sm">
                      <RotateCw className="h-4 w-4" />
                      <span>Drag to rotate</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70 text-sm">
                      <ZoomIn className="h-4 w-4" />
                      <span>Scroll to zoom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-white/10 text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Property Types</h3>
                <p className="text-white/70 mb-6">
                  Select a property type from our gallery to view and interact with it in 3D.
                </p>

                <Tabs
                  defaultValue={activeModel.id}
                  onValueChange={(value) => {
                    const model = models.find((m) => m.id === value)
                    if (model) setActiveModel(model)
                  }}
                >
                  <TabsList className="grid grid-cols-3 bg-black/30">
                    {models.map((model) => (
                      <TabsTrigger
                        key={model.id}
                        value={model.id}
                        className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                      >
                        {model.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {models.map((model) => (
                    <TabsContent key={model.id} value={model.id} className="mt-6">
                      <div className="space-y-4">
                        <p className="text-white/70">{model.description}</p>

                        <div className="grid grid-cols-1 gap-4 mt-6">
                          <div className="bg-black/30 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <RotateCw className="h-4 w-4 text-purple-400" />
                              Explore in 3D
                            </h4>
                            <p className="text-sm text-white/70">
                              Click and drag to rotate the model and view it from any angle.
                            </p>
                          </div>

                          <div className="bg-black/30 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <ZoomIn className="h-4 w-4 text-purple-400" />
                              Detailed View
                            </h4>
                            <p className="text-sm text-white/70">
                              Use the scroll wheel to zoom in and out for a closer look at the details.
                            </p>
                          </div>

                          <div className="bg-black/30 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <MousePointerClick className="h-4 w-4 text-purple-400" />
                              Interactive Features
                            </h4>
                            <p className="text-sm text-white/70">
                              Click on different parts of the model to learn more about specific features.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
